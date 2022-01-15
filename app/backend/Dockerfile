# for local development
FROM registry.redhat.io/rhel8/python-38:1-77
ENV HOME /opt/blueprint
ENV APP_ROOT $HOME
WORKDIR $HOME
COPY requirements.txt setup.sh ./
COPY . ./
RUN python3 -m pip install -r ./requirements.txt
ENTRYPOINT ["./setup.sh"]