FROM node:15-alpine

ARG APP_ENV

ENV APP_ENV=$APP_ENV

RUN echo "APP_ENV is set to $APP_ENV"

COPY . .

CMD sh -c 'if [ "$APP_ENV" = "prod" ]; then \
               npm run start; \
           else \
               npm run start:$APP_ENV; \
           fi'
