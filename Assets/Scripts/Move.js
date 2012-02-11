var moveSpeed = 100.0;
var zoomSpeed = 500.0;
var zoomMax = 120.0;
var zoomMin = 10.0;

function Update () {
	
	if(Input.GetButton("Forward")){
		transform.position += transform.forward * moveSpeed * Time.deltaTime;
	}
	if(Input.GetButton("Backward")){
		transform.position += -transform.forward * moveSpeed * Time.deltaTime;
	}
	
	if(Input.GetButton("Left")){
		transform.position += -transform.right * moveSpeed * Time.deltaTime;
	}
	if(Input.GetButton("Right")){
		transform.position += transform.right * moveSpeed * Time.deltaTime;
	}
	
	if (Input.GetAxis("Mouse ScrollWheel") < 0){ //BACK
		if(transform.position.y < zoomMax){
			transform.position += transform.up * zoomSpeed * Time.deltaTime;
		}
	}
	if (Input.GetAxis("Mouse ScrollWheel") > 0){ //FORWARD
		if(transform.position.y > zoomMin){
			transform.position += -transform.up * zoomSpeed * Time.deltaTime;
		}
	}
}