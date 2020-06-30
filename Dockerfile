# RUN cd frontend && \
#   npm install --cache /tmp/npm-cache --no-fund && \
#   npx ng build --aot \
#     --build-optimizer \
#     --common-chunk \
#     --cross-origin anonymous \
#     --extract-css \
#     --optimization \
#     --output-path=/srv/http/frontend/public \
#     --prod \
#     --subresource-integrity \
#     --vendor-chunk && \
#   cd /srv/http/backend && \
#   composer update --no-dev --no-autoloader --no-suggest --no-cache
