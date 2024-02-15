package handler

import (
	"encoding/json"
	"net/http"
)

// Hello handles requests to the "/hello" endpoint
func Hello(w http.ResponseWriter, r *http.Request) {
	response := map[string]string{"message": "Hello, API"}
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		return
	}
}
