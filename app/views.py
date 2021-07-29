from django.shortcuts import render
from django.http import JsonResponse
from django.template.loader import render_to_string

# Create your views here.

def home(request):
    return render(request, "site/home.html", {})

def book_list(request):
    return render(request, 'app/book_list.html', {})

def save_book_form(request, form, template_name):
    data = dict()
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            data['form_is_valid'] = True
            #books = Book.objects.all()
            books = None
            data['html_book_list'] = render_to_string('app/includes/partial_book_list.html', {
                'books': books
            })
        else:
            data['form_is_valid'] = False
    context = {'form': form}
    data['html_form'] = render_to_string(template_name, context, request=request)
    return JsonResponse(data)

# def book_create(request):
#     if request.method == 'POST':
#         form = None
#     return save_book_form(request, form, 'app/includes/calc_modal.html')

def book_create(request):
    data = dict()
    data['html_form'] = render_to_string('app/includes/calc_modal.html', request=request)
    return JsonResponse(data)

def app_calc_res(request):
    return render(request, 'app/app_resume.html', {})


def app_calc_form(request):
    data = dict()
    pointhx=dict()
    wynik = 0

    if request.method == 'POST':
            data['form_is_valid'] = True
            tdb = request.POST.get('tdb')
            pointhx['tdb']=tdb
            print(tdb)
            fi = request.POST.get('fi')
            pointhx['fi']=fi
            print(fi)
            wynik = (int(tdb)*int(fi))
            print(str(wynik))

            data['html_book_list'] = render_to_string('app/app_resume.html', {'wynik': wynik})
            

    #data['html_form'] = render_to_string('app/includes/calc_me.html', {'wynik': wynik}, request=request)
    data['html_form'] = render_to_string('app/includes/calc_me.html', {'wynik': wynik, 'pointhx':pointhx}, request=request)
    return JsonResponse(data)
    