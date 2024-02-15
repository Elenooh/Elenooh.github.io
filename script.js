document.getElementById('eyeColor').addEventListener('change', function() {
    var eyeColor = this.value;
        // Update the dog preview based on eye color selection
        // This might involve changing an overlay or the base image
    });

    // Handler for nose color change
    document.getElementById('noseColor').addEventListener('change', function() {
        var noseColor = this.value;
        // Update the dog preview based on nose color selection
        // Implement the update logic, similar to eye color
    });

    // Handler for base color change
    document.getElementById('baseColor').addEventListener('change', function() {
        var baseColor = this.value;
        // Update the dog preview based on base color selection
        // Implement the update logic, similar to eye color
    });

    // Add similar event listeners for other properties like skin color, markings, etc.
});
