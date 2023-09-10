import React from 'react'

const Session = () => {
  return (
    <>
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 sessioncard">
      
    <div class="col-10 col-sm-8 col-lg-4 ">
      <img src="https://img.freepik.com/free-vector/hand-drawn-world-mental-health-day_52683-44659.jpg?w=826&t=st=1694094518~exp=1694095118~hmac=bf7b646cb8bf2246ad8cd62c0ada026ad701c49152dc332db009a0420ce53797" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="600" height="500" loading="lazy" />
    </div>
    <div class="col-lg-4">
    <button type="button" class="btn btn-secondary btn-lg px-4 me-md-2 my-3">Upcoming Session</button>
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">The power of meditation</h1>
      <p class="lead">Register for this session to have a deep insight about the positive impacts of meditation</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        {/* <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
        <button type="button" class="btn btn-light btn-lg px-4">Register</button>
      </div>
    </div>
    




    <div class="modal-content rounded-4 shadow modal row">
    <h3 class="my-3 mx-3">Past Sessions</h3>
    <div class="modal-body p-5 col-2 modalb">
      <h2 class="fw-bold mb-0">Devotion to God</h2>

      <ul class="d-grid gap-4 my-5 list-unstyled small">
        <li class="d-flex gap-4">
          <img src="https://img.freepik.com/free-photo/silhouette-girl-praying-beautiful-sky-background_1150-7179.jpg?w=1380&t=st=1694106261~exp=1694106861~hmac=d25283c17ae087e09bf827f12ab584d70894743e69468f819b1c72469f34a075" alt="" height={140} />
          <div>
            <h5 class="mb-0">Grid view</h5>
            Not into lists? Try the new grid view.
          </div>
        </li>
        
      </ul>
    </div>

    <div class="modal-body p-5 col-2 modalb">
      <h2 class="fw-bold mb-0">Importance of Yoga</h2>

      <ul class="d-grid gap-4 my-5 list-unstyled small">
        <li class="d-flex gap-4">
          <img src="https://img.freepik.com/free-vector/female-doing-yoga-meditation-mandala-background_1017-38763.jpg?w=826&t=st=1694105672~exp=1694106272~hmac=cd0d515dce74b920354c0b37d46a9991a2087640cd2808501a5d55b2862cacec" alt="" height={140} />
          <div>
            <h5 class="mb-0">Grid view</h5>
            Not into lists? Try the new grid view.
          </div>
        </li>
        
      </ul>
    </div>

    <div class="modal-body p-5 col-2 modalb">
      <h2 class="fw-bold mb-0">Spread Positivity</h2>

      <ul class="d-grid gap-4 my-5 list-unstyled small">
        <li class="d-flex gap-4">
          <img src="https://img.freepik.com/free-photo/impossible-text-white-cubes-arrangement_23-2148698935.jpg?w=1480&t=st=1694106360~exp=1694106960~hmac=9320e67d20463250daea8cd2a9b263b9d0955f2c9970935a4350eacc9efe3aef" alt="" height={140} />
          <div>
            <h5 class="mb-0">Grid view</h5>
            Not into lists? Try the new grid view.
          </div>
        </li>
        
      </ul>
    </div>

    
  </div>

  

    
    
  </div>
</>
  )
}

export default Session
