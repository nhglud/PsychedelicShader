
precision mediump float;

varying vec2 pos;

uniform float width;
uniform float height;
uniform float time;

vec3 palette(float t) {
    vec3 a = vec3(.5, .5, .5);
    vec3 b = vec3(.5, .5, .5);
    vec3 c = vec3(1., 1., 1.);
    vec3 d = vec3(.2, .3, .5);

    return a + b * cos(6.28318 *( c * t + d));
}

void main() {
    vec2 uv = pos * 2. - 1.;
    uv.x *= width / height;
    vec2 uv0 = uv;
    vec3 finalCol = vec3(0.);

    for(int i = 0; i < 6; i++) {
        uv = fract(uv * 2.) - .5;
        float d0 = length(uv0);
        float d = length(uv) * exp(-d0);
        vec3 col = palette(d0 * time * .001);

        d = tan(d * 8. - time * 0.2) * .5;
        d = abs(d);
        d = 0.02 / d;
        finalCol += col * d;
    }

    gl_FragColor = vec4(finalCol, 1.);
}

