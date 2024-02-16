package routes

import (
	"github.com/gorilla/mux"
	"my-gin-project/controller"
)

func SetupRoutes() *mux.Router {
	// Initialize the router
	router := mux.NewRouter()

	// Route handlers for CRUD operations
	router.HandleFunc("/api/hello", controller.GetHello).Methods("POST")

	return router
}
