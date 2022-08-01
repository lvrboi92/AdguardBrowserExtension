import React from 'react';

import './icons.pcss';

export const Icons = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
            <symbol id="update-filters" viewBox="0 0 24 24">
                <g fill="none">
                    <path d="M17.3534 16.5104C16.1277 17.9637 14.321 18.9109 12.2915 18.994L12.0001 19C8.50404 19 5.60658 16.4371 5.08409 13.0876C5.07577 13.0342 5.02444 12.5409 5.01733 12.4872" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 12.8485L5.01723 11L6.581 12.578" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.64673 7.48953C7.87242 6.0363 9.67909 5.08906 11.7086 5.00596L12 5C15.4644 5 18.341 7.51668 18.9013 10.8215C18.9154 10.9049 18.9716 11.6168 18.9828 11.7011" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.9999 11.1515L18.9827 13L17.4189 11.423" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </symbol>

            <symbol id="pause" viewBox="0 0 24 24">
                <g fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.5 16L9.5 8L9.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 16L14.5 8L14.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </symbol>

            <symbol id="start" viewBox="0 0 24 24">
                <path fill="none" fillRule="evenodd" clipRule="evenodd" d="M19 12L7 20L7 4L19 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            <symbol id="settings" viewBox="0 0 24 24">
                <path fill="none" fillRule="evenodd" clipRule="evenodd" d="M7.92921 18.9146C8.06451 18.9146 8.19778 18.9475 8.31752 19.0105C8.74311 19.2345 9.1883 19.4192 9.64753 19.5621C9.91308 19.6446 10.12 19.8541 10.1991 20.1207C10.453 20.9752 10.6939 21.6143 10.852 22H13.148C13.3061 21.6135 13.5475 20.9742 13.8011 20.1199C13.8803 19.8534 14.0872 19.6438 14.3527 19.5613C14.812 19.4184 15.2572 19.2337 15.6827 19.0097C15.9289 18.88 16.2236 18.8818 16.4682 19.0144C17.2521 19.4394 17.8745 19.7207 18.2592 19.8822L19.8832 18.2591C19.7215 17.874 19.4405 17.2513 19.0152 16.4673C18.8826 16.2227 18.8809 15.9281 19.0105 15.6819C19.2346 15.2563 19.4192 14.8111 19.5621 14.3518C19.6446 14.0863 19.8542 13.8794 20.1207 13.8002C20.9752 13.5463 21.6143 13.3054 22 13.1473V10.8514C21.6135 10.6933 20.9744 10.4519 20.12 10.1982C19.8534 10.119 19.6439 9.91214 19.5613 9.64659C19.4184 9.18735 19.2338 8.74215 19.0097 8.31656C18.8801 8.07037 18.8818 7.77571 19.0144 7.53109C19.4394 6.74718 19.7207 6.12475 19.8819 5.74009L18.2597 4.1168C17.8745 4.27827 17.2518 4.55954 16.4679 4.98483C16.2233 5.11742 15.9287 5.11918 15.6825 4.98952C15.2569 4.76548 14.8117 4.58084 14.3525 4.43792C14.0869 4.3554 13.88 4.14586 13.8009 3.87929C13.5472 3.02507 13.3061 2.3857 13.148 2H10.852C10.6958 2.38492 10.4546 3.02064 10.2009 3.86965C10.1242 4.14096 9.91549 4.35507 9.64623 4.4387C9.18701 4.58154 8.74182 4.76609 8.31621 4.99004C8.07003 5.1197 7.77538 5.11794 7.53076 4.98535C6.74686 4.56032 6.12443 4.27905 5.73978 4.11785L4.11678 5.74035C4.27824 6.12553 4.55951 6.74823 4.98479 7.53213C5.11738 7.77675 5.11913 8.07141 4.98948 8.3176C4.76553 8.7432 4.58099 9.1884 4.43815 9.64763C4.35563 9.91318 4.1461 10.1201 3.87952 10.1992C3.02505 10.4529 2.38596 10.6941 2 10.8521V13.1481C2.38387 13.3044 3.01568 13.5442 3.86208 13.7958C4.1443 13.8731 4.36551 14.0924 4.44518 14.374C4.58538 14.8197 4.76482 15.2522 4.98141 15.6663C5.12378 15.9228 5.12082 16.2352 4.97359 16.489C4.55508 17.2627 4.27746 17.8779 4.11756 18.2599L5.74082 19.8842C6.126 19.7228 6.74868 19.4415 7.53258 19.0162C7.65429 18.9499 7.79061 18.915 7.92921 18.9146Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path fill="none" fillRule="evenodd" clipRule="evenodd" d="M12 9.27271C10.4937 9.27271 9.27271 10.4937 9.27271 12C9.27271 13.5062 10.4937 14.7273 12 14.7273C13.5062 14.7273 14.7273 13.5062 14.7273 12C14.7255 10.4945 13.5055 9.27447 12 9.27271Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </symbol>

            <symbol id="logo" viewBox="0 0 160 35">
                <g fill="none" fillRule="evenodd">
                    <path fill="currentColor" d="M125.471 24.653l-1.217-3.04h-6.06l-1.15 3.04h-4.115l6.57-15.487h3.672l6.503 15.487h-4.203zM121.268 13.3l-1.99 5.316h3.937l-1.947-5.316zM112.31 18.813c0 .933-.159 1.782-.476 2.548a5.538 5.538 0 01-1.36 1.969c-.59.547-1.302.973-2.135 1.28-.833.306-1.758.459-2.776.459-1.032 0-1.961-.153-2.787-.46-.826-.306-1.526-.732-2.101-1.28a5.552 5.552 0 01-1.328-1.968c-.31-.766-.464-1.615-.464-2.549V9.166h3.76v9.34c0 .423.056.824.166 1.203.11.38.28.719.509 1.018.229.299.53.535.907.71.376.176.83.263 1.36.263.531 0 .985-.087 1.36-.262.377-.176.683-.412.919-.711.236-.3.405-.638.508-1.018.104-.379.155-.78.155-1.203v-9.34h3.783v9.646zM96.789 23.712c-.767.394-1.663.715-2.688.963-1.025.248-2.142.372-3.35.372-1.254 0-2.408-.197-3.463-.59-1.054-.395-1.96-.949-2.72-1.663a7.578 7.578 0 01-1.78-2.57c-.429-1-.642-2.111-.642-3.337 0-1.24.217-2.362.652-3.368a7.493 7.493 0 011.803-2.57 8 8 0 012.699-1.63c1.032-.38 2.145-.569 3.34-.569 1.238 0 2.389.186 3.45.558 1.062.372 1.925.871 2.588 1.498l-2.389 2.69c-.368-.422-.855-.768-1.46-1.038-.604-.27-1.29-.405-2.057-.405-.663 0-1.275.12-1.836.361-.56.24-1.047.576-1.46 1.006a4.56 4.56 0 00-.962 1.532 5.32 5.32 0 00-.343 1.935c0 .715.104 1.371.31 1.97.207.597.513 1.111.918 1.541.406.43.907.766 1.504 1.007.597.24 1.28.36 2.046.36a7.75 7.75 0 001.261-.098 4.742 4.742 0 001.106-.317v-2.822H90.33V15.51h6.459v8.203zM159.307 16.866c0 1.356-.254 2.526-.763 3.51a7.095 7.095 0 01-2.013 2.429 8.429 8.429 0 01-2.82 1.4 11.547 11.547 0 01-3.186.448h-5.84V9.166h5.663c1.106 0 2.198.127 3.274.382a8.261 8.261 0 012.876 1.27c.84.59 1.519 1.381 2.035 2.373.516.991.774 2.216.774 3.675zm-3.937 0c0-.875-.144-1.6-.432-2.177a3.674 3.674 0 00-1.15-1.378 4.626 4.626 0 00-1.637-.733 8.13 8.13 0 00-1.891-.219h-1.88v9.057h1.791a8.22 8.22 0 001.958-.23 4.651 4.651 0 001.659-.755c.48-.35.863-.816 1.15-1.4.288-.583.432-1.305.432-2.165zM80.487 16.866c0 1.356-.255 2.526-.763 3.51a7.095 7.095 0 01-2.013 2.429 8.429 8.429 0 01-2.82 1.4 11.547 11.547 0 01-3.186.448h-5.84V9.166h5.663c1.106 0 2.197.127 3.274.382a8.261 8.261 0 012.875 1.27c.841.59 1.52 1.381 2.035 2.373.517.991.775 2.216.775 3.675zm-3.938 0c0-.875-.143-1.6-.431-2.177a3.674 3.674 0 00-1.15-1.378 4.626 4.626 0 00-1.637-.733 8.13 8.13 0 00-1.891-.219h-1.88v9.057h1.791a8.22 8.22 0 001.958-.23 4.651 4.651 0 001.659-.755c.479-.35.862-.816 1.15-1.4.288-.583.431-1.305.431-2.165zM60.468 24.653l-1.216-3.04H53.19l-1.15 3.04h-4.115l6.57-15.487h3.672l6.503 15.487h-4.203zM56.265 13.3l-1.99 5.316h3.937L56.265 13.3zM139.252 24.653l-3.385-6.147h-1.283v6.147h-3.716V9.166h5.973c.752 0 1.485.076 2.2.23a5.757 5.757 0 011.925.776 4.08 4.08 0 011.36 1.444c.34.598.509 1.341.509 2.23 0 1.05-.288 1.933-.863 2.648-.575.714-1.371 1.225-2.389 1.531l4.093 6.628h-4.424zm-.155-10.74c0-.365-.078-.66-.232-.886a1.586 1.586 0 00-.598-.525 2.615 2.615 0 00-.818-.252 6.102 6.102 0 00-.874-.066h-2.013v3.61h1.792c.31 0 .627-.026.951-.077.324-.05.62-.142.885-.273.265-.132.483-.321.652-.569.17-.248.255-.569.255-.963z" />
                    <path fill="#68BC71" d="M17.154 0C11.792 0 5.324 1.252 0 4.007c0 5.95-.073 20.776 17.154 30.905C34.382 24.784 34.31 9.959 34.31 4.008 28.984 1.252 22.517 0 17.154 0z" />
                    <path fill="#67B279" d="M17.137 34.902C-.073 24.772 0 9.956 0 4.007 5.319 1.255 11.778.003 17.137 0v34.902z" />
                    <path fill="#FFF" d="M16.529 23.295l10.373-13.88c-.76-.605-1.427-.179-1.794.152l-.013.001-8.65 8.933-3.259-3.894c-1.554-1.783-3.668-.423-4.162-.063l7.505 8.75" />
                </g>
            </symbol>

            <symbol id="block-ad" viewBox="0 0 17 17">
                <g fill="#DF3812" fillRule="nonzero">
                    <path d="M14 7.186V1.445C14 .649 13.376 0 12.606 0H1.394C.629 0 0 .645 0 1.44v10.12C0 12.354.628 13 1.402 13h5.634v-.9H1.402c-.272 0-.502-.237-.502-.54V1.44c0-.302.23-.54.494-.54h11.212c.265 0 .494.238.494.545v5.741h.9zm0-5.741C14 .649 13.376 0 12.606 0H1.394C.629 0 0 .645 0 1.44v10.12C0 12.354.628 13 1.402 13h5.634v-.9H1.402c-.272 0-.502-.237-.502-.54V1.44c0-.302.23-.54.494-.54h11.212c.265 0 .494.238.494.545v5.741h.9V1.445z" />
                    <path d="M9.55 16.29V6.992l6.63 5.95-2.708-.011 1.134 2.6-2.172 1.083-1.126-2.581L9.55 16.29zm.9-7.282v4.662l1.078-1.385 1.352 3.1.56-.278-1.344-3.082 1.724.007-3.37-3.024z" />
                </g>
            </symbol>

            <symbol id="sandwich" viewBox="0 0 14 13">
                <g fill="none" fillRule="evenodd">
                    <path d="M-5-6h24v24H-5z" />
                    <path stroke="#4A90E2" strokeLinecap="square" d="M.5.5h13M.5 6.25h13M.5 12.25h13" />
                </g>
            </symbol>

            <symbol id="thumb-down" viewBox="0 0 16 18">
                <g fill="none" fillRule="evenodd">
                    <path d="M-4-4h24v24H-4z" />
                    <path fill="#F5A623" d="M14.719 7.667c.208-.742.083-1.765-.585-2.377.129-.515.126-1.161-.141-1.734a1.895 1.895 0 00-.818-.878 2.337 2.337 0 00-.342-1.147C12.441.89 11.764.445 10.803.208c-.405-.1-1.28-.126-1.28-.126h-.02c-1.623 0-3.51.646-5.464 1.892l-2.023.299a1.21 1.21 0 00-1.05 1.191v5.838c0 .49.358.723.64.91.156.103.372.237.617.393.686.434 1.834 1.161 2.222 1.532.485.463.933 1.277 1.406 2.138.305.553.62 1.126.984 1.684.464.71 1.158 1.116 1.904 1.116.637 0 1.246-.307 1.63-.822.425-.572.533-1.33.294-2.081-.264-.83-.602-1.798-1.106-2.69-.006-.01-.011-.02 0-.04.013-.022.025-.023.037-.023h3.635c.889 0 1.592-.491 1.882-1.316.289-.82.113-1.808-.392-2.436zm-1.49 2.874H9.594c-.711 0-1.161.755-.814 1.368.425.753.736 1.588 1.034 2.525.322 1.011-.325 1.763-1.075 1.763-.4 0-.827-.213-1.154-.714-.94-1.44-1.603-3.095-2.525-3.976-.728-.696-3.203-2.117-3.203-2.205V3.464a.34.34 0 01.294-.33l2.139-.322a.349.349 0 00.135-.05C6.352 1.513 8.086.935 9.502.935c.382 0 .74.042 1.074.124 1.658.408 1.763 1.413 1.696 1.934a.335.335 0 00.253.366c.886.233.927 1.421.646 1.998-.079.16-.003.35.156.434.662.35.71 1.375.45 1.856a.321.321 0 00.087.406c.725.563.764 2.487-.635 2.487z" />
                </g>
            </symbol>

            <symbol id="shield" viewBox="0 0 14 15">
                <g fill="none" fillRule="evenodd">
                    <path d="M-5-5h24v24H-5z" />
                    <path fill="#67B279" d="M7 15a.477.477 0 01-.145-.023c-1.583-.504-2.93-1.47-4.005-2.873C2.004 11 1.326 9.625.836 8.019.01 5.309 0 2.896 0 2.794c0-.243.186-.446.43-.47.036-.003 3.722-.38 6.291-2.234a.477.477 0 01.558 0c2.568 1.855 6.255 2.23 6.292 2.234a.473.473 0 01.429.47c0 .102-.01 2.515-.836 5.225-.49 1.606-1.168 2.98-2.014 4.085-1.075 1.403-2.422 2.37-4.005 2.874A.478.478 0 017 15zM.963 3.208c.04.792.193 2.616.788 4.558C2.767 11.081 4.533 13.187 7 14.031c2.473-.846 4.24-2.96 5.255-6.286a19.5 19.5 0 00.782-4.537C11.974 3.054 9.22 2.532 7 1.048 4.78 2.532 2.027 3.054.963 3.208z" />
                </g>
            </symbol>

            <symbol id="small-cross" viewBox="0 0 14 12">
                <path fill="none" fillRule="evenodd" stroke="#B267A0" strokeLinecap="round" strokeLinejoin="round" d="M6.42857143,6.42857143 L17.604347,17.604347 M6.42857143,17.5714286 L17.604347,6.39565302" transform="translate(-5 -6)" />
            </symbol>

            <symbol id="apple" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M14.8902 4.03331C15.5764 3.23057 16.0389 2.11243 15.9124 1C14.9235 1.038 13.7272 1.63744 13.0182 2.43923C12.3815 3.15077 11.8257 4.2879 11.9751 5.37849C13.0782 5.46114 14.204 4.837 14.8902 4.03331M17.3638 11.0936C17.3914 13.9692 19.9715 14.9259 20 14.9382C19.9791 15.0057 19.5879 16.3014 18.641 17.6409C17.8215 18.798 16.9717 19.9503 15.6326 19.975C14.3173 19.9988 13.8938 19.2208 12.3892 19.2208C10.8854 19.2208 10.4153 19.9503 9.17045 19.9988C7.87802 20.0453 6.893 18.7467 6.06786 17.5934C4.37952 15.2346 3.08994 10.9274 4.82206 8.02041C5.68241 6.57738 7.21943 5.66254 8.88874 5.63974C10.1574 5.61599 11.3556 6.46528 12.1312 6.46528C12.9069 6.46528 14.363 5.44404 15.8934 5.59414C16.5339 5.61979 18.3326 5.84399 19.487 7.47891C19.3938 7.53496 17.3409 8.69015 17.3638 11.0936" />
            </symbol>

            <symbol id="android" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" fillRule="evenodd" d="M6.6 17.25C6.6 17.7312 7.005 18.125 7.5 18.125H8.4V21.1875C8.4 21.9137 9.003 22.5 9.75 22.5C10.497 22.5 11.1 21.9137 11.1 21.1875V18.125H12.9V21.1875C12.9 21.9137 13.503 22.5 14.25 22.5C14.997 22.5 15.6 21.9137 15.6 21.1875V18.125H16.5C16.995 18.125 17.4 17.7312 17.4 17.25V8.49995H6.6V17.25V17.25ZM3.85 8.49995C3.103 8.49995 2.5 9.0862 2.5 9.81245V15.9375C2.5 16.6637 3.103 17.25 3.85 17.25C4.597 17.25 5.2 16.6637 5.2 15.9375V9.81245C5.2 9.0862 4.597 8.49995 3.85 8.49995V8.49995ZM20.15 8.49995C19.403 8.49995 18.8 9.0862 18.8 9.81245V15.9375C18.8 16.6637 19.403 17.25 20.15 17.25C20.897 17.25 21.5 16.6637 21.5 15.9375V9.81245C21.5 9.0862 20.897 8.49995 20.15 8.49995V8.49995ZM15.177 3.08995L16.347 1.95245C16.527 1.77745 16.527 1.5062 16.347 1.3312C16.167 1.1562 15.888 1.1562 15.708 1.3312L14.376 2.6262C13.665 2.2762 12.855 2.07495 12 2.07495C11.136 2.07495 10.326 2.2762 9.60598 2.6262L8.26498 1.3312C8.08498 1.1562 7.80598 1.1562 7.62598 1.3312C7.44598 1.5062 7.44598 1.77745 7.62598 1.95245L8.80498 3.0987C7.47298 4.05245 6.59998 5.5837 6.59998 7.32495H17.4C17.4 5.5837 16.527 4.0437 15.177 3.08995V3.08995ZM10.2 5.57495H9.29999V4.69995H10.2V5.57495V5.57495ZM14.7 5.57495H13.8V4.69995H14.7V5.57495V5.57495Z" />
            </symbol>

            <symbol id="cross" viewBox="0 0 15.642 15.642">
                <path d="m8.882 7.821 6.541-6.541c.293-.293.293-.768 0-1.061s-.768-.293-1.061 0l-6.541 6.541-6.541-6.54c-.293-.293-.768-.293-1.061 0s-.293.768 0 1.061l6.541 6.541-6.54 6.54c-.293.293-.293.768 0 1.061.147.146.338.22.53.22s.384-.073.53-.22l6.541-6.541 6.541 6.541c.147.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.061z" fill="currentColor" fillRule="evenodd" />
            </symbol>

            <symbol id="play" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 12L7 20L7 4L19 12Z" stroke="#a4a4a4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="#fff" />
            </symbol>

            <symbol id="circle" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12ZM18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12Z" fill="#c23814" />
            </symbol>

            <symbol id="checkmark" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.9842 4.86804C21.6094 5.4116 21.6755 6.35904 21.132 6.98421L10.6987 18.9842C10.4212 19.3034 10.0219 19.4905 9.5991 19.4997C9.1763 19.5088 8.76928 19.339 8.47828 19.0322L2.91156 13.1617C2.34153 12.5606 2.36674 11.6112 2.96787 11.0412C3.569 10.4711 4.51841 10.4963 5.08845 11.0975L9.51856 15.7693L18.868 5.01584C19.4116 4.39066 20.359 4.32449 20.9842 4.86804Z" fill="#67b279" />
            </symbol>

            <symbol id="exclamation" viewBox="0 0 4 24">
                <path d="M3.9697 6.88858V0H0V6.88858L0.848485 15.4217H3.12121L3.9697 6.88858ZM4 22V17.8731H0V22H4Z" fill="#D58500" />
            </symbol>

            <symbol id="select" viewBox="0 0 14 8">
                <path d="m6 10 6 6 6-6" fill="none" stroke="#888" strokeLinecap="round" strokeWidth="1.5" transform="translate(-5 -9)" />
            </symbol>
        </svg>
    );
};
