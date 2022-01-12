FROM python:3.8-alpine
RUN apk update 
RUN python3 -m pip install --no-cache-dir pipenv
WORKDIR /usr/src/app
COPY Pipfile Pipfile.lock setup.sh ./
COPY . ./
RUN pipenv install
EXPOSE 5000
ENTRYPOINT ["/usr/src/app/setup.sh"]