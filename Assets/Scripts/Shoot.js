var prefabBullet : Transform;
var shootForce : float; 

function Update () {
	
	if(Input.GetButtonDown("Jump")){
		var instanceBullet = Instantiate(prefabBullet, transform.position, Quaternion.identity);
		instanceBullet.rigidbody.AddForce(transform.forward * shootForce);
	}

}