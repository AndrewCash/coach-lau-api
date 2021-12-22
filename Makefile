build-dev:
	docker build -t lau-api-dev -f Dockerfile.dev .

run-dev:
	docker run -i -d -p 3333:3333 lau-api-dev


.PHONY: build-dev run-dev