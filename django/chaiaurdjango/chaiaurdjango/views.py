from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    # return HttpResponse("Hello, world. You're at the chaiaurdjango home.")
    return render(request, "website/index.html")


def contact(request):
    # return HttpResponse("Hello, world. You're at the chaiaurdjango contact.")
    return render(request, 'website/contact.html')


def about(request):
    # return HttpResponse("Hello, world. You're at the chaiaurdjango about.")
    return render(request, 'website/about.html')
