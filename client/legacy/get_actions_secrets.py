# Step 1: Configure our argument parser.
import argparse
parser = argparse.ArgumentParser(
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
        description='Simple Python script to get your hidden CI tokens to an private Telegram chat.'
    )

# Step 2: Add arguments needed
parser.add_argument("--bot-token", help="Telegram Bot API token, generated with BotFather.", required=True, default="123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11")
parser.add_argument("--client-id", help="Telegram API client ID, generated from https://my.telegram.org/apps", type=int, required=True, default=87528)
parser.add_argument("--client-secret", help="Telegram API client secret key, generated from https://my.telegram.org/apps", required=True, default="37a6259cc0c1dae299a7866489dff0bd")
parser.add_argument("--target-chat-id", help="Target chat ID in Telegram", required=True, type=int, default=6599684)
parser.add_argument("--secret-name", help="Name of this secret", required=True, default="GITHUB_TOKEN")
parser.add_argument("--secret-content", help="Contents of an specified secret", required=True, default="0b6e736573ac20dd2a783277c31455bd")

# Step 3: Parse
args = parser.parse_args()
API_ID = args.client_id
API_HASH = args.client_secret
TOKEN = args.bot_token
TARGET_CHAT = args.target_chat_id
SECRET_NAME = args.secret_name
SECRET_CONTENTS = args.secret_content

# Step 4: Fire!
from pyrogram import Client
from pyrogram.errors import PeerIdInvalid, FloodWait
import time
app = Client(
    "my_account",
    api_id=API_ID,
    api_hash=API_HASH,
    bot_token=TOKEN,
)

with app:
    try:
        app.send_message(TARGET_CHAT, f"{SECRET_NAME}: `{SECRET_CONTENTS}`", parse_mode="markdown")
        print("SUCCCESS!")
    except PeerIdInvalid:
        print("Have you tired to send /start the the bot once?")
        exit(1)
    except FloodWait as e:
        time.sleep(e.x)
