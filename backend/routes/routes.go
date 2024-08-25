package routes

import (
	"backend/controllers"

	"github.com/gorilla/mux"
)

func RegisterRoutes() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/api/hello", controllers.Hello).Methods("GET")
	router.HandleFunc("/api/goodbye", controllers.Goodbye).Methods("GET")
	return router
}
