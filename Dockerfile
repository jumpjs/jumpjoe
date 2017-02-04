FROM andrewgbliss/express

RUN adduser myuser
USER myuser

COPY ./src /usr/src/app/express

ENV PORT $PORT

CMD npm start
