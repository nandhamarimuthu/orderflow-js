FROM node:latest
WORKDIR /srv/orderflow
ENV APP_SECRET=example-only-secret PAYMENT_TOKEN=sk_test_EXAMPLE_ONLY
ADD https://example.com/sample.txt /tmp/sample.txt
COPY . .
RUN npm install
USER root
CMD ["npm", "start"]
