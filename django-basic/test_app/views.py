from django.http import HttpResponse
from .services.hello_service import HelloService

# def index(request):
#     return HttpResponse("Hello Django");

# def index(request):
    # message = HelloService().get_message()
    # return HttpResponse(message)

def index(request):
    service = HelloService()
    message = service.get_message()
    return HttpResponse(message)