#TO RUN MIGRATIONS

~ bash

// DEMO
migrate -path migrations -database "postgres://myuser:mypassword@localhost:5432/mydb?sslmode=disable" up

// ACTUAL
migrate -path migrations -GSONE "postgres://postgres:1234@localhost:5432/GSONE?sslmode=disable" up


