/* eslint-disable react/require-default-props */
/* istanbul ignore file */
import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Logo = ({ size = "small" }) => (
  <div className="Logo">
    <svg
      width={size === "large" ? "160" : "130"}
      height={size === "large" ? "60" : "60"}
      viewBox="0 0 130 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 73.406 42.577 C 72.35 42.577 71.437 42.342 70.667 41.872 C 69.898 41.395 69.302 40.724 68.879 39.859 C 68.457 38.987 68.246 37.958 68.246 36.773 C 68.246 35.567 68.454 34.529 68.869 33.657 C 69.292 32.778 69.884 32.104 70.647 31.634 C 71.417 31.164 72.329 30.929 73.385 30.929 C 74.455 30.929 75.367 31.174 76.124 31.664 C 76.886 32.148 77.465 32.85 77.86 33.769 C 78.262 34.689 78.453 35.796 78.433 37.09 L 77.207 37.09 L 77.207 36.681 C 77.173 35.169 76.832 34.018 76.185 33.228 C 75.538 32.438 74.611 32.042 73.406 32.042 C 72.159 32.042 71.195 32.455 70.514 33.279 C 69.84 34.096 69.503 35.254 69.503 36.753 C 69.503 38.238 69.84 39.389 70.514 40.206 C 71.195 41.024 72.152 41.432 73.385 41.432 C 74.237 41.432 74.979 41.235 75.613 40.84 C 76.253 40.438 76.76 39.866 77.135 39.123 L 78.198 39.593 C 77.755 40.547 77.115 41.282 76.277 41.8 C 75.439 42.318 74.482 42.577 73.406 42.577 Z M 69.053 37.09 L 69.053 36.027 L 77.769 36.027 L 77.769 37.09 L 69.053 37.09 Z" fill="url(#paint0_linear_56_57)"/>
      <path d="M 82.46 42.27 L 78.455 31.235 L 79.67 31.235 L 83.083 40.666 L 86.485 31.235 L 87.711 31.235 L 83.706 42.27 L 82.46 42.27 Z" fill="url(#paint1_linear_56_57)"/>
      <path d="M 92.884 42.577 C 91.828 42.577 90.916 42.342 90.146 41.872 C 89.376 41.395 88.78 40.724 88.358 39.859 C 87.936 38.987 87.724 37.958 87.724 36.773 C 87.724 35.567 87.932 34.529 88.348 33.657 C 88.77 32.778 89.363 32.104 90.125 31.634 C 90.895 31.164 91.808 30.929 92.864 30.929 C 93.933 30.929 94.846 31.174 95.602 31.664 C 96.365 32.148 96.944 32.85 97.339 33.769 C 97.741 34.689 97.932 35.796 97.911 37.09 L 96.685 37.09 L 96.685 36.681 C 96.651 35.169 96.31 34.018 95.663 33.228 C 95.016 32.438 94.09 32.042 92.884 32.042 C 91.638 32.042 90.674 32.455 89.993 33.279 C 89.318 34.096 88.981 35.254 88.981 36.753 C 88.981 38.238 89.318 39.389 89.993 40.206 C 90.674 41.024 91.631 41.432 92.864 41.432 C 93.715 41.432 94.458 41.235 95.091 40.84 C 95.731 40.438 96.239 39.866 96.614 39.123 L 97.676 39.593 C 97.233 40.547 96.593 41.282 95.755 41.8 C 94.917 42.318 93.96 42.577 92.884 42.577 Z M 88.532 37.09 L 88.532 36.027 L 97.247 36.027 L 97.247 37.09 L 88.532 37.09 Z" fill="url(#paint2_linear_56_57)"/>
      <path d="M 108.136 42.27 L 108.136 36.528 C 108.136 35.833 108.065 35.213 107.922 34.668 C 107.786 34.123 107.575 33.66 107.288 33.279 C 107.009 32.897 106.655 32.608 106.226 32.41 C 105.803 32.213 105.303 32.114 104.724 32.114 C 104.124 32.114 103.603 32.22 103.161 32.431 C 102.725 32.635 102.364 32.925 102.078 33.299 C 101.798 33.674 101.587 34.12 101.444 34.638 C 101.308 35.149 101.24 35.707 101.24 36.313 L 100.31 36.201 C 100.31 35.009 100.511 34.028 100.913 33.258 C 101.321 32.482 101.87 31.91 102.558 31.542 C 103.246 31.167 104.019 30.98 104.877 30.98 C 105.483 30.98 106.025 31.068 106.502 31.246 C 106.985 31.423 107.404 31.675 107.758 32.002 C 108.113 32.322 108.406 32.703 108.637 33.146 C 108.869 33.582 109.039 34.062 109.148 34.587 C 109.264 35.111 109.322 35.659 109.322 36.232 L 109.322 42.27 L 108.136 42.27 Z M 100.055 42.27 L 100.055 31.235 L 101.127 31.235 L 101.127 33.718 L 101.24 33.718 L 101.24 42.27 L 100.055 42.27 Z" fill="url(#paint3_linear_56_57)"/>
      <path d="M 117.005 42.27 C 116.419 42.399 115.841 42.447 115.268 42.413 C 114.696 42.386 114.185 42.26 113.736 42.035 C 113.293 41.803 112.959 41.449 112.734 40.972 C 112.551 40.584 112.448 40.193 112.428 39.797 C 112.407 39.402 112.397 38.949 112.397 38.439 L 112.397 28.17 L 113.582 28.17 L 113.582 38.418 C 113.582 38.881 113.586 39.266 113.593 39.573 C 113.606 39.872 113.678 40.148 113.807 40.4 C 114.052 40.87 114.441 41.156 114.972 41.259 C 115.503 41.354 116.181 41.337 117.005 41.207 L 117.005 42.27 Z M 109.925 32.308 L 109.925 31.235 L 117.005 31.235 L 117.005 32.308 L 109.925 32.308 Z" fill="url(#paint4_linear_56_57)"/>
      <path d="M 122.372 42.556 C 121.099 42.556 120.046 42.287 119.215 41.749 C 118.391 41.211 117.88 40.462 117.683 39.501 L 118.888 39.297 C 119.059 39.951 119.46 40.472 120.094 40.86 C 120.727 41.248 121.504 41.442 122.424 41.442 C 123.336 41.442 124.062 41.248 124.6 40.86 C 125.138 40.472 125.407 39.941 125.407 39.266 C 125.407 38.898 125.322 38.599 125.152 38.367 C 124.988 38.129 124.661 37.911 124.171 37.713 C 123.68 37.516 122.951 37.284 121.984 37.018 C 120.962 36.746 120.162 36.473 119.583 36.201 C 119.011 35.928 118.606 35.619 118.367 35.271 C 118.136 34.924 118.02 34.498 118.02 33.994 C 118.02 33.388 118.194 32.856 118.541 32.4 C 118.888 31.937 119.372 31.576 119.992 31.317 C 120.618 31.058 121.341 30.929 122.158 30.929 C 122.975 30.929 123.711 31.065 124.365 31.337 C 125.019 31.603 125.547 31.978 125.949 32.461 C 126.35 32.938 126.582 33.493 126.643 34.127 L 125.438 34.352 C 125.322 33.643 124.964 33.085 124.365 32.676 C 123.765 32.26 123.016 32.049 122.117 32.042 C 121.266 32.029 120.571 32.199 120.033 32.553 C 119.495 32.901 119.225 33.361 119.225 33.933 C 119.225 34.26 119.317 34.539 119.501 34.771 C 119.692 34.995 120.026 35.203 120.503 35.394 C 120.979 35.585 121.654 35.789 122.526 36.007 C 123.588 36.279 124.416 36.559 125.009 36.845 C 125.608 37.131 126.03 37.468 126.275 37.856 C 126.521 38.238 126.643 38.711 126.643 39.276 C 126.643 40.298 126.262 41.102 125.499 41.688 C 124.743 42.267 123.701 42.556 122.372 42.556 Z" fill="url(#paint5_linear_56_57)"/>
      <text fill="url(#paint5_linear_56_57)" style={{fontFamily: "Kalimati", fontSize: "39px", fontWeight: 700, whiteSpace: "pre"}} x="-1.125" y="44.995">724</text>
      <defs>
        <linearGradient
          id="paint0_linear_56_57"
          x1="31.4312"
          y1="28.0978"
          x2="93.0547"
          y2="27.4592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_56_57"
          x1="31.4312"
          y1="28.0978"
          x2="93.0547"
          y2="27.4592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_56_57"
          x1="31.4312"
          y1="28.0978"
          x2="93.0547"
          y2="27.4592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_56_57"
          x1="31.4312"
          y1="28.0978"
          x2="93.0547"
          y2="27.4592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_56_57"
          x1="31.4312"
          y1="28.0978"
          x2="93.0547"
          y2="27.4592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_56_57"
          x1="31.4312"
          y1="28.0978"
          x2="93.0547"
          y2="27.4592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_56_57"
          x1="14.5386"
          y1="17.3067"
          x2="32.6182"
          y2="17.3067"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#643EFF" />
          <stop offset="1" stopColor="#A691FC" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_56_57"
          x1="9.89808"
          y1="1.91577"
          x2="9.89808"
          y2="33.2065"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9278FE" />
          <stop offset="1" stopColor="#613CFB" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
}

export default Logo;
