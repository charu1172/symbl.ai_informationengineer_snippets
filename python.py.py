import requests

def news():
    url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=27ef942b38e14cc39a5e4a76be933396"

    news = requests.get(url).json()

    articles = news["articles"]

    my_articles = []
    my_news = ""

    for article in articles:
        my_articles.append(article["title"])

    for i in range(10):
        my_news = my_news + str(i) + "." + my_articles[i] + "\n"
    print(my_news)

news()