@echo off

REM Create a virtual environment in the venv directory
python -m venv venv

REM Activate the virtual environment
call venv\Scripts\activate

REM Upgrade pip to the latest version
python -m pip install --upgrade pip

REM Install the required packages
pip install -r requirements.txt

REM Deactivate the virtual environment after installation (optional)
deactivate
