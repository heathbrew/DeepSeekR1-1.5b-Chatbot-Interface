import requests

def call_prompt_api(prompt):
    # URL of the Flask API
    url = "http://localhost:5000/prompt"

    # Prepare the payload
    payload = {
        "prompt": prompt
    }

    try:
        # Make the POST request
        response = requests.post(url, json=payload)

        # Check for HTTP errors
        if response.status_code != 200:
            print(f"Error: {response.status_code}, {response.json().get('error')}")
            return None

        # Parse and return the response
        data = response.json()
        return data.get('response', 'No response received')
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None

if __name__ == '__main__':
    # Example prompt
    prompt = "Explain the theory of relativity."

    # Call the Flask API
    response = call_prompt_api(prompt)

    # Print the result
    if response:
        print("Response from DeepSeek-R1:")
        print(response)
