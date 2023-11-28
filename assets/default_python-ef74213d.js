const n=`class Nodo:\r
    def __init__(self, dato):\r
        self.dato = dato\r
        self.siguiente = None\r
\r
class ListaEnlazada:\r
    def __init__(self):\r
        self.cabeza = None\r
\r
    def insertar_al_inicio(self, nuevo_dato):\r
        nuevo_nodo = Nodo(nuevo_dato)\r
        nuevo_nodo.siguiente = self.cabeza\r
        self.cabeza = nuevo_nodo\r
        print(f'Insertado al inicio: {nuevo_dato}')\r
\r
    def insertar_al_final(self, nuevo_dato):\r
        nuevo_nodo = Nodo(nuevo_dato)\r
        if self.cabeza is None:\r
            self.cabeza = nuevo_nodo\r
            return\r
        ultimo = self.cabeza\r
        while ultimo.siguiente:\r
            ultimo = ultimo.siguiente\r
        ultimo.siguiente = nuevo_nodo\r
        print(f'Insertado al final: {nuevo_dato}')\r
\r
    def eliminar_nodo(self, clave):\r
        temp = self.cabeza\r
        if temp is not None:\r
            if temp.dato == clave:\r
                self.cabeza = temp.siguiente\r
                temp = None\r
                return\r
        while temp is not None:\r
            if temp.dato == clave:\r
                break\r
            previo = temp\r
            temp = temp.siguiente\r
        if temp is None:\r
            return\r
        previo.siguiente = temp.siguiente\r
        temp = None\r
        print(f'Eliminado: {clave}')\r
\r
    def mostrar_lista(self):\r
        temp = self.cabeza\r
        while temp:\r
            print(temp.dato, end=' ')\r
            temp = temp.siguiente\r
        print()\r
\r
# Código para probar la lista enlazada\r
lista = ListaEnlazada()\r
lista.insertar_al_inicio(1)\r
lista.insertar_al_final(2)\r
lista.insertar_al_inicio(3)\r
lista.insertar_al_final(4)\r
print('Lista actual:')\r
lista.mostrar_lista()\r
lista.eliminar_nodo(3)\r
print('Lista despues de eliminar un nodo:')\r
lista.mostrar_lista()`;export{n as default};
