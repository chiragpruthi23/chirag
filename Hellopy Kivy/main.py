from kivymd.app import MDApp
from kivymd.uix.label import MDLabel
class HelloWorld(MDApp):
    def build(self):
        return MDLabel(text="Hello World", font_style="H1")
if __name__ == "__main__":
    HelloWorld().run()
