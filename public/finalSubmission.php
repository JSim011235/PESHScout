<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['functionality']) && isset($_POST['has_teleop'])) {
        $functionality = $_POST['functionality'];
        $has_teleop = $_POST['has_teleop'];
        $endgame_strategy = isset($_POST['endgame_strategy']) ? $_POST['endgame_strategy'] : '';
        $auton_points = isset($_POST['auton_points']) ? $_POST['auton_points'] : '';
        $reads_team_element = isset($_POST['reads_team_element']) ? $_POST['reads_team_element'] : '';
        $scores_pixels = isset($_POST['scores_pixels']) ? $_POST['scores_pixels'] : '';
        $response = [
            'functionality' => $functionality,
            'has_teleop' => $has_teleop,
            'endgame_strategy' => $endgame_strategy,
            'auton_points' => $auton_points,
            'reads_team_element' => $reads_team_element,
            'scores_pixels' => $scores_pixels,
        ];

        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        http_response_code(400); // Bad Req
        echo json_encode(['error' => 'Required fields missing']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
