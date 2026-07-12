class parent:
    def __init__(self,name,roln):
        self.__name=name
        self.__roln=roln
    def get_name(self):
        return self.__name
    def get_roln(self):
        return self.__roln

class child:
    def display(self):
        p=parent("ravi",123)
        print(p.get_name(),p.get_roln())
        
c=child()
c.display()