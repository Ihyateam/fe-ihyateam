<div class="loadership_YSLKW" ><div></div><div></div><div></div><div></div></div>

<style>
    .loadership_YSLKW {
        display: flex;
        position: relative;
        width: 61px;
        height: 13px;
    }
    .loadership_YSLKW div {
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #ffffff;
        top: 0px;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .loadership_YSLKW div:nth-child(1) {
        left: 0px;
        animation: loadership_YSLKW_scale_up 0.6s infinite;
    }
    .loadership_YSLKW div:nth-child(2) {
        left: 0px;
        animation: loadership_YSLKW_translate 0.6s infinite;
    }
    .loadership_YSLKW div:nth-child(3) {
        left: 24px;
        animation: loadership_YSLKW_translate 0.6s infinite;
    }
    .loadership_YSLKW div:nth-child(4) {
        left: 48px;
        animation: loadership_YSLKW_scale_down 0.6s infinite;
    }
    @keyframes loadership_YSLKW_scale_up {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes loadership_YSLKW_scale_down {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes loadership_YSLKW_translate {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
</style>
