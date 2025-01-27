import subprocess

def process_prompt(prompt):
    try:
        result = subprocess.run(
            ['ollama', 'run', 'deepseek-r1:1.5b'],
            input=prompt,
            text=True,
            capture_output=True
        )

        if result.returncode != 0:
            raise RuntimeError(result.stderr.strip())

        return result.stdout.strip()
    except Exception as e:
        raise RuntimeError(f"Error executing Ollama command: {e}")