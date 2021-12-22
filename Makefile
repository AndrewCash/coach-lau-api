build-dev:
	docker build -t lau-api-dev -f Dockerfile.dev .

run-dev:
	docker run -i -d -p 3333:3333 lau-api-dev

# Update DB 
migrate:
	docker exec -it coach-lau_api_1 node ace migration:run
migrateDown: 
	docker exec -it coach-lau_api_1 node ace migration:rollback
migrateStatus: 
	docker exec -it coach-lau_api_1 node ace migration:status
seed: 
	docker exec -it coach-lau_api_1 node ace db:seed


.PHONY: build-dev run-dev migrate migrateDown migrateStatus seed