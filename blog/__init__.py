from flask import Flask, render_template


def create_app(config_env=None):
    app = Flask(__name__)

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def index(path):
        print(path)
        return render_template('index.html')

    return app
