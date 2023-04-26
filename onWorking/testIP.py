import socket
info = socket.getaddrinfo(socket.gethostname(), None)
print (info)
