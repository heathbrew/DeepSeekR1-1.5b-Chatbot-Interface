from flask import Flask

def create_app():
    app = Flask(__name__)

    # Import and register routes
    from .routes.query import query_bp
    app.register_blueprint(query_bp, url_prefix='/api')

    return app