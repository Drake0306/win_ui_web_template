package main

import (
	"backend/models"
	"backend/routes"
	"log"
	"net/http"

	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

const (
	// Update these values to match your PostgreSQL setup
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "1234"
	dbname   = "GSONE"
)

func main() {
	// Init Routes
	router := routes.RegisterRoutes()

	// Connection string
	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	// Open a connection to the database using GORM
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error connecting to the database:", err)
	}

	log.Println("Successfully connected to PostgreSQL!")

	// Auto-migrate all models
	err = db.AutoMigrate(
		// Include your models here
		&models.User{},
	)
	if err != nil {
		log.Fatal("Error migrating database schema:", err)
	}

	log.Println("All tables created or updated!")

	// init server
	log.Println("Starting server on :8080...")
	log.Fatal(http.ListenAndServe(":8080", router))
}
