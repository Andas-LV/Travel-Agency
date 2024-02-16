package handler

import (
	"fmt"
	"log"
	"my-gin-project/routes"
	"net/http"
)

func main() {
	router := routes.SetupRoutes()
	fmt.Println("Starting server for Moriarty")
	log.Fatal(http.ListenAndServe("127.0.0.1:8080", router))
}
