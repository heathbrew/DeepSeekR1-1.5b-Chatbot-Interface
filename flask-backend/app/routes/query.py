from flask import Blueprint, request, jsonify
from services.model_service import process_prompt
import logging

query_bp = Blueprint('query', __name__)

@query_bp.route('/prompt', methods=['POST'])
def handle_prompt():
    data = request.get_json()
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    try:
        response = process_prompt(prompt)
        return jsonify({"response": response}), 200
    except Exception as e:
        logging.error(f"Error processing prompt: {e}")
        return jsonify({"error": str(e)}), 500

@query_bp.route('/prompt2', methods=['POST'])
def handle_prompt2():
    data = request.get_json()
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    static_response = {
        "response": "This is a static response to your prompt."
    }
    return jsonify(static_response), 200