all:
	@docker compose -f docker-compose.yml up --build --remove-orphans

down:
	-docker compose -f docker-compose.yml down
	-docker container prune -f
	-docker rmi $$(docker images -a -q)
	-docker volume prune -f
	-docker image prune -f -a
	-docker network prune -f
	-docker builder prune --all --force

delete-modules:
	@echo "Deleting modules..."
	@sudo rm -rf backend/node_modules
	@sudo rm -rf frontend/node_modules
	@echo "Modules deleted."

re: down all