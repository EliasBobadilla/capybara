# Environment variables for development
export NODE_ENV := development
export WEB_CLIENT_PORT := 3000
export WEB_API_PORT := 3001

.PHONY: yarn dev-start build docker-clean

yarn:
	yarn ci
	
dev-start:
	@docker-compose stop && docker-compose up --build -d --remove-orphans && lazydocker

build:
#	npm run ci:dev
	npm run build --workspace=web-api
#	npm run build --workspace=web-client

docker-clean:
	docker system prune --force