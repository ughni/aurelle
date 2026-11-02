"""Membuat ilustrasi SVG placeholder (palet AURELLE) di public/images.
Ganti dengan foto asli: simpan .jpg dengan nama sama lalu ubah ekstensi di src/data/images.ts."""
import os
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
def svg(w, h, body, defs=""):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMid slice"><defs>{defs}</defs>{body}</svg>'
def grad(i, a, b): return f'<linearGradient id="{i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{a}"/><stop offset="1" stop-color="{b}"/></linearGradient>'
def figure(w, h, skin="#D5BFAE", hair="#302722", bg=("#E8D8C8", "#D5BFAE"), robe="#F8F5F1", face=1.0):
    cx = w / 2; hr = h * .13 * face
    s = f'<rect width="{w}" height="{h}" fill="url(#g)"/><circle cx="{w*.7}" cy="{h*.3}" r="{h*.16}" fill="#F8F5F1" opacity=".45"/>'
    s += f'<path d="M{cx-w*.42} {h} Q{cx-w*.38} {h*.66} {cx} {h*.64} Q{cx+w*.38} {h*.66} {cx+w*.42} {h}Z" fill="{robe}"/>'
    s += f'<rect x="{cx-hr*.32}" y="{h*.5}" width="{hr*.64}" height="{h*.17}" fill="{skin}"/><path d="M{cx-w*.2} {h*.7} Q{cx} {h*.62} {cx+w*.2} {h*.7} L{cx+w*.2} {h*.74} Q{cx} {h*.66} {cx-w*.2} {h*.74}Z" fill="{skin}" opacity=".55"/>'
    s += f'<ellipse cx="{cx}" cy="{h*.4}" rx="{hr}" ry="{hr*1.25}" fill="{skin}"/><path d="M{cx-hr*1.12} {h*.4} Q{cx-hr*1.1} {h*.24} {cx} {h*.235} Q{cx+hr*1.1} {h*.24} {cx+hr*1.12} {h*.4} Q{cx+hr*.7} {h*.33} {cx} {h*.32} Q{cx-hr*.7} {h*.33} {cx-hr*1.12} {h*.4}Z" fill="{hair}"/>'
    return svg(w, h, s, grad("g", *bg))
def room(w, h, kind="lobby", wall="#EDE5DC"):
    s = f'<rect width="{w}" height="{h}" fill="{wall}"/><rect y="{h*.74}" width="{w}" height="{h*.26}" fill="#D5BFAE"/>'
    s += f'<path d="M{w*.62} {h*.74} V{h*.28} a{w*.14} {w*.14} 0 0 1 {w*.28} 0 V{h*.74}Z" fill="#F8F5F1"/><path d="M{w*.66} {h*.74} V{h*.3} a{w*.1} {w*.1} 0 0 1 {w*.2} 0 V{h*.74}Z" fill="#E8D8C8"/>'
    if kind == "lobby":
        s += f'<rect x="{w*.08}" y="{h*.58}" width="{w*.46}" height="{h*.16}" rx="14" fill="#756052"/><rect x="{w*.08}" y="{h*.5}" width="{w*.46}" height="{h*.1}" rx="14" fill="#8A7364"/><circle cx="{w*.3}" cy="{h*.26}" r="{h*.08}" fill="none" stroke="#302722" stroke-width="3"/>'
    elif kind == "consult":
        s += f'<rect x="{w*.1}" y="{h*.56}" width="{w*.17}" height="{h*.18}" rx="16" fill="#756052"/><rect x="{w*.38}" y="{h*.56}" width="{w*.17}" height="{h*.18}" rx="16" fill="#8A7364"/><ellipse cx="{w*.325}" cy="{h*.68}" rx="{w*.05}" ry="{h*.02}" fill="#302722"/><rect x="{w*.31}" y="{h*.68}" width="{w*.03}" height="{h*.06}" fill="#302722"/>'
    elif kind == "treatment":
        s += f'<rect x="{w*.06}" y="{h*.6}" width="{w*.5}" height="{h*.08}" rx="12" fill="#F8F5F1"/><rect x="{w*.1}" y="{h*.68}" width="{w*.04}" height="{h*.08}" fill="#302722"/><rect x="{w*.48}" y="{h*.68}" width="{w*.04}" height="{h*.08}" fill="#302722"/><rect x="{w*.3}" y="{h*.6}" width="{w*.06}" height="{h*.08}" fill="#E8D8C8"/><line x1="{w*.18}" y1="0" x2="{w*.18}" y2="{h*.34}" stroke="#302722" stroke-width="3"/><circle cx="{w*.18}" cy="{h*.37}" r="{h*.04}" fill="#F8F5F1" stroke="#302722" stroke-width="3"/>'
    else:
        s += f'<rect x="{w*.06}" y="{h*.58}" width="{w*.5}" height="{h*.16}" fill="#F8F5F1"/><rect x="{w*.06}" y="{h*.56}" width="{w*.5}" height="{h*.02}" fill="#302722"/><text x="{w*.31}" y="{h*.68}" font-family="Georgia,serif" font-size="{h*.035}" fill="#756052" text-anchor="middle" letter-spacing="6">AURELLE</text><line x1="{w*.2}" y1="0" x2="{w*.2}" y2="{h*.3}" stroke="#302722" stroke-width="2"/><circle cx="{w*.2}" cy="{h*.32}" r="{h*.025}" fill="#F8F5F1" stroke="#302722" stroke-width="2"/><line x1="{w*.42}" y1="0" x2="{w*.42}" y2="{h*.34}" stroke="#302722" stroke-width="2"/><circle cx="{w*.42}" cy="{h*.36}" r="{h*.025}" fill="#F8F5F1" stroke="#302722" stroke-width="2"/>'
    s += f'<ellipse cx="{w*.93}" cy="{h*.6}" rx="{w*.035}" ry="{h*.1}" fill="#756052"/><rect x="{w*.915}" y="{h*.68}" width="{w*.03}" height="{h*.07}" fill="#302722"/>'
    return svg(w, h, s)
def products(w, h):
    s = f'<rect width="{w}" height="{h}" fill="url(#g)"/><ellipse cx="{w*.5}" cy="{h*.82}" rx="{w*.42}" ry="{h*.05}" fill="#302722" opacity=".18"/><rect x="{w*.1}" y="{h*.8}" width="{w*.8}" height="{h*.04}" fill="#F8F5F1"/>'
    s += f'<rect x="{w*.18}" y="{h*.42}" width="{w*.16}" height="{h*.38}" rx="14" fill="#F8F5F1"/><rect x="{w*.21}" y="{h*.34}" width="{w*.1}" height="{h*.09}" fill="#302722"/><rect x="{w*.2}" y="{h*.55}" width="{w*.12}" height="{h*.1}" fill="#D5BFAE"/>'
    s += f'<rect x="{w*.42}" y="{h*.3}" width="{w*.14}" height="{h*.5}" rx="10" fill="#756052"/><rect x="{w*.44}" y="{h*.22}" width="{w*.1}" height="{h*.09}" rx="6" fill="#E8D8C8"/>'
    s += f'<rect x="{w*.62}" y="{h*.62}" width="{w*.2}" height="{h*.18}" rx="12" fill="#F8F5F1"/><rect x="{w*.62}" y="{h*.57}" width="{w*.2}" height="{h*.06}" rx="6" fill="#302722"/>'
    return svg(w, h, s, grad("g", "#EDE5DC", "#E8D8C8"))
def texture(w, h, a="#D5BFAE", b="#756052", c="#E8D8C8"):
    f = '<filter id="b"><feGaussianBlur stdDeviation="40"/></filter>'
    s = f'<rect width="{w}" height="{h}" fill="{c}"/><g filter="url(#b)"><circle cx="{w*.3}" cy="{h*.3}" r="{h*.3}" fill="{a}"/><circle cx="{w*.75}" cy="{h*.6}" r="{h*.28}" fill="{b}" opacity=".6"/><circle cx="{w*.5}" cy="{h*.9}" r="{h*.22}" fill="#F8F5F1"/></g>'
    return svg(w, h, s, f)
imgs = {
 "hero": figure(900, 1125), "hero-detail": products(600, 600), "about": room(900, 1100, "lobby"), "about-detail": texture(600, 600),
 "treat-facial": figure(800, 1000, "#D5BFAE", "#756052", ("#EDE5DC", "#E8D8C8")), "treat-rejuv": texture(800, 1000, "#E8D8C8", "#D5BFAE", "#F8F5F1"),
 "treat-acne": products(800, 1000), "treat-consult": room(800, 1000, "consult"),
 "why": room(1000, 1250, "treatment", "#E8D8C8"),
 "spec-1": figure(700, 875, "#D5BFAE", "#302722", ("#EDE5DC", "#D5BFAE"), "#F8F5F1"),
 "spec-2": figure(700, 875, "#C9AE9A", "#756052", ("#E8D8C8", "#D5BFAE"), "#EDE5DC", 1.05),
 "spec-3": figure(700, 875, "#DCC6B4", "#4A3B32", ("#F8F5F1", "#E8D8C8"), "#756052", .95),
 "gallery-interior": room(1000, 1250, "lobby"), "gallery-consult": room(1000, 800, "consult", "#E8D8C8"),
 "gallery-treatment": room(1000, 800, "treatment"), "gallery-reception": room(1000, 1000, "reception"), "gallery-products": products(800, 800),
}
for k, v in imgs.items(): open(os.path.join(OUT, k + ".svg"), "w").write(v)
print(len(imgs), "gambar dibuat")
