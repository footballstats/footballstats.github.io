from yattag import Doc, indent

doc, tag, text = Doc().tagtext()

name = input('Name: ')
code = input('Code: ')
website = input('Website: ')
goals_table = input('Goals Table: ')
assists_table = input('Assists Table: ')


with open('data/data.py','a') as data:
    data.write('\n\n')
    data.write('{}_goals = scrape_table("{}", {})'.format(code,website,goals_table))
    data.write('\n')
    data.write('{}_assists = scrape_table("{}", {})'.format(code,website,assists_table))
    data.write('\n\n')
    data.write("with open('{}_goals.json', 'w+') as f:\n".format(code))
    data.write("    json.dump({}_goals.get_obj(), f, indent=2)".format(code))
    data.write('\n\n')
    data.write("with open('{}_assists.json', 'w+s') as f:\n".format(code))
    data.write("    json.dump({}_assists.get_obj(), f, indent=2)".format(code))
    

with tag('html'):
    with tag('head'):
        with tag('title'):
            text('{} Statistics'.format(name))
        doc.stag('link', href='style/page.css', rel='stylesheet')
        doc.stag('link', href='images/icon.png', rel='icon')
        doc.stag('link', href="https://fonts.googleapis.com/css?family=Roboto", rel="stylesheet")
    with tag('body', id=code):
        with tag('div', klass='container'):
            with tag('div', klass='goal'):
                with tag('table', id='{}Goals'.format(code)):
                    with tag('tr', id='head'):
                        with tag('td'):
                            text('Player')
                        with tag('td'):
                            text('Club')
                        with tag('td'):
                            text('Goals')
            with tag('div', klass='assists'):
                with tag('table', id='{}Assists'.format(code)):
                    with tag('tr', id='head'):
                        with tag('td'):
                            text('Player')
                        with tag('td'):
                            text('Club')
                        with tag('td'):
                            text('Goals')
        with tag('script',  src='script/jquery.js'):
            text('')
        with tag('script',  src='script/table.js'):
            text('')
text = indent(doc.getvalue())

with open('../{}.html'.format(code), 'w+') as f:
    f.write(text)