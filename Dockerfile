FROM cypress/included:13.5.0

COPY . app/

WORKDIR /app

RUN npm ci && npm cache clean --force

RUN npx cypress verify

ENTRYPOINT [ "npm" ]
