#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Create a virtual environment in the venv directory
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Upgrade pip to the latest version
python3 -m pip install --upgrade pip

# Install the required packages
pip install -r requirements.txt

# Optional: Deactivate the virtual environment after installation
deactivate

echo "Setup completed successfully!"
