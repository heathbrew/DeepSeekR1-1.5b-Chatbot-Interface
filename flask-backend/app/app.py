from flask import Flask
from flask_cors import CORS  # Import CORS
from routes.query import query_bp

app = Flask(__name__)

# Enable CORS for the app
CORS(app)

# Register the blueprints
app.register_blueprint(query_bp, url_prefix='/api')


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)