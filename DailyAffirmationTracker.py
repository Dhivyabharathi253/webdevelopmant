import random
import datetime

# A list of positive affirmations
affirmations = [
    "I am confident and courageous.",
    "I am becoming the best version of myself.",
    "I have the power to create change.",
    "I am focused, persistent, and will never quit.",
    "I am grateful for everything I have.",
    "I radiate positivity and attract great things.",
    "Every challenge I face helps me grow.",
    "I trust myself and my decisions.",
    "My dreams are valid and achievable.",
    "I am worthy of love, success, and happiness."
    "Winning is Easy but is dufficult to start again"
]

def get_random_affirmation():
    return random.choice(affirmations)

def display_affirmation():
    today = datetime.datetime.now().strftime("%A, %B %d, %Y")
    print(f"\n🌞 Daily Affirmation for {today} 🌞\n")
    print("✨ " + get_random_affirmation() + " ✨\n")

# Run the generator
if __name__ == "__main__":
    display_affirmation()
