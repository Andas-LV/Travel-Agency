package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	// Initialize Gin
	r := gin.Default()

	// Define your routes
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello API Epta1",
		})
	})
	//
	// Run the server
	r.Run(":8080")
}
