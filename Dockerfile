FROM python:2.7-alpine

ADD dist /marathon-ui
COPY start.py /marathon-ui/start.py
ADD start.sh start.sh

CMD ["./start.sh"]