<?php 

include('config.php');

// if user sends a message then get it 
if(isset($_GET['message'])){
    $message = $_GET['message'];

    // prepare statement
    if($stmt = $conn->prepare("SELECT response FROM messagechatbot WHERE text = ? LIMIT 1")) {
        $stmt->bind_param('s', $message);

        // execute statement
        if($stmt->execute()){
            $stmt->store_result();

            if($stmt->num_rows == 1){
                $stmt->bind_result($response_message);
                $stmt->fetch();
                $result = ['response_message' => $response_message];
                echo json_encode($result);
            } else {
                echo json_encode(['response_message' => 'what!']);
            }
        } else {
            echo json_encode(['response_message' => 'what!']);
        }
        $stmt->close();
    } else {
        echo json_encode(['response_message' => 'what!']);
    }
}

?>