#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Activate the virtual environment
source venv/bin/activate

# Run the Python script
python app/app.py

# Keep the terminal open after running the script (optional)
read -p "Press Enter to exit..."
