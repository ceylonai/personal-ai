import webview

if __name__ == '__main__':
    window = webview.create_window('Hello World', ' http://localhost:5173/', width=800, height=600)
    webview.start()

