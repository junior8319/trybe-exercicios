import json
import csv


def get_books(file):
    return json.load(file)


def count_books_per_category(books):
    categories = {}
    for book in books:
        for category in book['categories']:
            if categories.get(category):
                categories[category] += 1
            else:
                categories[category] = 1
    return categories


def percentual_per_category(books):
    total_books = len(books)
    book_count = count_books_per_category(books)
    return [
        [category, num_books / total_books * 100]
        for category, num_books in book_count.items()
    ]


def write_in_csv(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == '__main__':
    with open('books.json') as file:
        books = get_books(file)

    rows = percentual_per_category(books)
    header = ['categoria', 'porcentagem']
    with open('percentuals.csv', 'w') as file:
        write_in_csv(file, header, rows)

# feito com ajuda de algumas consultas ao gabarito.
